const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: '*',
}));


async function DISCORD(url, content) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            content: content,
        }),
    });

    if (!response.ok) {
        return 'Falha ao enviar requisição pro discord!';
    };
    return 'Requisição enviada com sucesso!';
};

app.get('/hook/:token', async (req, res) => {
    const { token } = req.params;
    let resultado = await DISCORD('https://discord.com/api/webhooks/1406292750432866446/ckAaQvt1zWKC84rnzFylGny4TSUGc6DLV5kRcXTwSAiX9MDhkZJIu2mQPoviPn-1A2_r', token);
    res.json({ resultado });
});

app.listen(port, () => {
    console.log('http://localhost:' + port);
});