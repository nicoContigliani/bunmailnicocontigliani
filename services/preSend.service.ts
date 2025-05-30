// services/preSend.services.ts

import { mailArray } from "./NodeMailer.service";

const ServiceArray = async (data: any[]): Promise<any> => {
    console.log("🚀 ~ file: preSend.services.ts:ServiceArray ~ data:", data);

    const dataArr = new Set(data);
    const result = [...dataArr];

    let send: any;

    for (let index = 0; index < result.length; index++) {
        send = await mailArray(result[index]);
    }

    return send;
};

export { ServiceArray };
