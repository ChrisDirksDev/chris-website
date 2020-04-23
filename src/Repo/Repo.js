export default class Repo extends Object{

    constructor(endpoint){
        super();
        this.endpoint = endpoint;
        this.sendEmail = this.sendEmail.bind(this);
    }

    testConnection(){

    }

    connect(){
        //placeholder
    }

    close(){
        //placeholder
    }

    async sendEmail(subject, message){

        fetch(this.endpoint + '/mail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject: subject,
                message: message
            })
        }).then(resp => {
            console.log("Email request complete", resp.status);
            return resp.status;
        }).catch(er => {
            console.log("Email Send Failure", er);
            return er;

        });
    }
}