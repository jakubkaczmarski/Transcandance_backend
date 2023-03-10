import { MessageBody, WebSocketServer , SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(8001, {cors: '*' }) //Every frontend can connect with this

export class ChatGateway {
  @WebSocketServer()
  server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log(message);
    this.server.emit('message', message);
  }
}
