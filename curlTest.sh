curl -XPOST \
    -H "Content-Type: application/json" \
    -H "x-npm-signature: sha256=555de877c536848f3aaead79353c88a610668575c546e31aa8c6c7fd8241cb12" \
    -d '{"event":"package:publish","name":"@kafkajs/zstd","version":"1.0.0","hookOwner":{"username":"nevon"},"payload":{"name":"@kafkajs/zstd"},"change":{"version":"1.0.0"},"time":1603444214995}' \
    http://localhost:3001/hook