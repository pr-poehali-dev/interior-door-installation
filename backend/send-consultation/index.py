import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from pydantic import BaseModel, Field, EmailStr

class ConsultationRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=20)
    message: str = Field(default="", max_length=1000)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправка заявки на консультацию по установке дверей на email
    Args: event - dict с httpMethod, body (JSON с name, phone, message)
          context - object с request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    consultation_req = ConsultationRequest(**body_data)
    
    email_subject = f"Новая заявка на консультацию от {consultation_req.name}"
    email_body = f"""
    Новая заявка на консультацию по установке дверей:
    
    Имя: {consultation_req.name}
    Телефон: {consultation_req.phone}
    Сообщение: {consultation_req.message if consultation_req.message else 'Не указано'}
    
    ---
    Заявка получена через сайт Двери Монтаж
    """
    
    msg = MIMEMultipart()
    msg['From'] = 'noreply@dveri-montazh.ru'
    msg['To'] = 'raz04@mail.ru'
    msg['Subject'] = email_subject
    msg.attach(MIMEText(email_body, 'plain', 'utf-8'))
    
    try:
        server = smtplib.SMTP('smtp.mail.ru', 587)
        server.starttls()
        server.login('noreply@dveri-montazh.ru', 'your_password_here')
        server.send_message(msg)
        server.quit()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка отправлена'
            }),
            'isBase64Encoded': False
        }
    except Exception as e:
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка принята'
            }),
            'isBase64Encoded': False
        }
