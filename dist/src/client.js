import * as grpc from "@grpc/grpc-js";
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

//remove \src
const __dirname = path.dirname(__filename).replace('\src', '');
const SERVER_ADDRESS = 'localhost:5050'; 
const PROTO_PATH = path.join(__dirname, '../proto/chat.proto');
const pkgDef = protoLoader.loadSync(PROTO_PATH, {});
const grpcObj = grpc.loadPackageDefinition(pkgDef);
const chatPackage = grpcObj.chatPackage;
function main() {
    const client = new chatPackage.Chat(SERVER_ADDRESS, grpc.credentials.createInsecure());
    const message = { message: 'Hello, server!' }; 
    client.ChatMessage(message, (error, response) => {
        if (error) {
            console.error('Error:', error);
            return;
        }
        console.log('Response from server:', response);
    });
}
main();
