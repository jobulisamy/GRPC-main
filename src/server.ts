import * as grpc from "@grpc/grpc-js";
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/chat';
import { ChatHandlers } from '../proto/chatPackage/Chat';
import { fileURLToPath } from 'url';
import path from 'path';

const PORT = 5050;
const proto_path = './proto/chat.proto';

// Use fileURLToPath to resolve __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkg_def = protoLoader.loadSync(path.resolve(__dirname, proto_path));
const grpc_obj = (grpc.loadPackageDefinition(pkg_def) as unknown) as ProtoGrpcType;
const chat_package = grpc_obj.chatPackage;

function main() {
    const server = getServer();
    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Your server has started on port ${port}`);
        server;
    });
}

function getServer() {
    const server = new grpc.Server();
    server.addService(chat_package.Chat.service, {
        "ChatMessage": (req, res) => {
            console.log(req, res);
        }
    } as ChatHandlers);

    return server;
}

main();
