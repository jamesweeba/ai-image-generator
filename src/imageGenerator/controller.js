const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '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'


const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateImages(req, res) {
    let { prompt, size } = req.body;
    try {
        const completion = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: size
        });
        let imageUrl = completion.data.data[0].url;
        return res.status(200).json({
            success: true,
            data: imageUrl
        });
    } catch (error) {
        console.log(error?.response?.data);
        // console.log(error?.response?.data);
        res.status(400).json({
            success: false,
            error: {...error?.response?.data}
        })
    }
}

module.exports = generateImages