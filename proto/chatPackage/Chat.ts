// Original file: proto/chat.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Request as _chatPackage_Request, Request__Output as _chatPackage_Request__Output } from '../chatPackage/Request';
import type { Response as _chatPackage_Response, Response__Output as _chatPackage_Response__Output } from '../chatPackage/Response';

export interface ChatClient extends grpc.Client {
  ChatMessage(argument: _chatPackage_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_Response__Output>): grpc.ClientUnaryCall;
  ChatMessage(argument: _chatPackage_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_Response__Output>): grpc.ClientUnaryCall;
  ChatMessage(argument: _chatPackage_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_Response__Output>): grpc.ClientUnaryCall;
  ChatMessage(argument: _chatPackage_Request, callback: grpc.requestCallback<_chatPackage_Response__Output>): grpc.ClientUnaryCall;
  chatMessage(argument: _chatPackage_Request, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_Response__Output>): grpc.ClientUnaryCall;
  chatMessage(argument: _chatPackage_Request, metadata: grpc.Metadata, callback: grpc.requestCallback<_chatPackage_Response__Output>): grpc.ClientUnaryCall;
  chatMessage(argument: _chatPackage_Request, options: grpc.CallOptions, callback: grpc.requestCallback<_chatPackage_Response__Output>): grpc.ClientUnaryCall;
  chatMessage(argument: _chatPackage_Request, callback: grpc.requestCallback<_chatPackage_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface ChatHandlers extends grpc.UntypedServiceImplementation {
  ChatMessage: grpc.handleUnaryCall<_chatPackage_Request__Output, _chatPackage_Response>;
  
}

export interface ChatDefinition extends grpc.ServiceDefinition {
  ChatMessage: MethodDefinition<_chatPackage_Request, _chatPackage_Response, _chatPackage_Request__Output, _chatPackage_Response__Output>
}
