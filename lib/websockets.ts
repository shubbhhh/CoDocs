import { Server as HttpServer } from "http"
import { WebSocketServer } from "ws"

export default function setupWebSocketServer(server: HttpServer) {
    const ws = new WebSocketServer({ server })

    ws.on("connection", (ws, req) => {
        
    })

}