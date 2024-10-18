import * as grpc from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from '../proto/chat'
import {ChatHandlers} from '../proto/chatPackage/Chat'

import path from 'path'

const PORT = 5050
const proto_path = './proto/chat.proto'

const pkg_def = protoLoader.loadSync(path.resolve(__dirname, ))
const grpc_obj = (grpc.loadPackageDefinition(pkg_def) as unknown) as ProtoGrpcType
const chat_package = grpc_obj.chatPackage

function main(){
    const server = getServer()
    server.bindAsync('0.0.0.0:${PORT}', grpc.ServerCredentials.createInsecure(), 
    (err, port) => {
        if (err) {
            console.error(err)
            return 
        }
        console.log('Your server has started on port ${port}')
        server.start()
    }
)
}

function getServer(){
    const server = new grpc.Server()
    server.addService(chat_package.Chat.service, {
        "ChatMessage": (req, res) => {
            console.log(req, res)
        }
    } as ChatHandlers)

    return server
}

main()

