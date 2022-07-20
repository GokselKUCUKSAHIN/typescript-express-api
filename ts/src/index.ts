import {app} from "./app";

const PORT = process.env.PORT || 5000;
console.info("PORT NUMBER:", PORT);

app.listen(PORT, () => {
    console.log(`Listening: http://localhost:${PORT}`);
});