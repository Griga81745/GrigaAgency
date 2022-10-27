import {parseBody} from "next/dist/server/api-utils/node";

export default function handler(req, res) {
    const tgbot = "5702424973:AAF6gxNpnJltiAmCfLUXCpznR81_2-F_yEU"
    var message = JSON.stringify(req.body, null, 2);

    if (req.method === 'POST') {
        const ret = fetch(
            `https://api.telegram.org/bot${tgbot}/sendMessage?chat_id=2071502991&text=${message}&parse_mode=HTML`
        );
        res.status(200).redirect("/")

    }else{
        res.status(405).redirect("/")
    }

}
