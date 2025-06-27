const axios = require('axios');
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJoYW5pdGhhcmFqZXN3YXJpOUBnbWFpbC5jb20iLCJleHAiOjE3NTEwMDA3NTAsImlhdCI6MTc1MDk5OTg1MCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjFlZmEyNTE4LWM2MTEtNDUzNi1hMGU5LWNmMDA4YzA3ZWVmZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Imhhbml0aGEiLCJzdWIiOiIxMzk5MmRlZi1hODA0LTQyMWEtYjQ0Zi1lYzBhZWEwMTBiYjAifSwiZW1haWwiOiJoYW5pdGhhcmFqZXN3YXJpOUBnbWFpbC5jb20iLCJuYW1lIjoiaGFuaXRoYSIsInJvbGxObyI6IjIyYjkxYTQ3MjAiLCJhY2Nlc3NDb2RlIjoieFdQTlh0IiwiY2xpZW50SUQiOiIxMzk5MmRlZi1hODA0LTQyMWEtYjQ0Zi1lYzBhZWEwMTBiYjAiLCJjbGllbnRTZWNyZXQiOiJlcGRodHJtUXJzRGhFQ3FSIn0.Bk_uh5XFq_xphVERUEW3uJ4NIPGZhLNUv5OhDtyygxc";
function Log(stack, level, packageName, message) {
    const url = "http://20.244.56.144/evaluation-service/logs";
    const data = {
        stack: stack,
        level: level,
        package: packageName,
        message: message
    };

    const headers = {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json"
    };

    axios.post(url, data, { headers })
        .then(res => {
            console.log("Log sent successfully:", res.status);
        })
        .catch(err => {
            console.error("Failed to send:", err.response?.data || err.message);
        });
}
Log("backend", "error", "handler", "received string, expected bool");

