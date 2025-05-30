// utils/formating.ts

type FormatedEmail = {
    dataUser: any;
    company: any;
};

const formating = (mails: string): FormatedEmail => {
    const dataR: any[] | any | undefined = mails.split('@');
    return {
        dataUser: dataR[0],
        company: dataR[1].split('.')[0]
    };
};

export { formating };

