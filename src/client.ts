import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/chat'; // Adjust the import as necessary
import path from 'path';

const PORT = 5050;
const proto_path = path.resolve(__dirname, '../proto/chat.proto');

// Load the protobuf definition
const pkg_def = protoLoader.loadSync(proto_path);
const grpc_obj = (grpc.loadPackageDefinition(pkg_def) as unknown) as ProtoGrpcType;
const chat_package = grpc_obj.chatPackage;

function main() {
    const client = new chat_package.Chat('localhost:5050', grpc.credentials.createInsecure());

    const message = {
        name: 'User',
        message: 'Hello, server!',
    };

    client.ChatMessage(message, (error, response) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Server response:', response);
        }
    });
}

main();
