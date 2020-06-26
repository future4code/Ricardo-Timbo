import axios from 'axios'


// ------------------ 1 ---------------------------------- 
// a) o endpoint subcribers/all
// b) <any[]>
// ------------------ 2 ---------------------------------- 
// a) o modo de declarar fica bem parecido com algumas alterações
// ------------------ 3 ----------------------------------
// a) não. a anterior era any 
// b) usamos any para não ter erro com o tipo do retorno
// ------------------ 4 ----------------------------------
// a) assincrona. porque a resposta de uma requisição é uma promise
// ------------------ 5 ----------------------------------
// a) no caso do forEach o programa iria rodar direto sem aguardar,
// com o for of o ciclo da aplicação é respeitado. nesse caso queremos 
// buscar os assinantes e depois enviar uma mensagem um de cada vez o ideal é o for of
// ------------------ 6 ----------------------------------
// a) envie todas as notificações ao mesmo tempo
// b) ganhamos desempenho, vai esperar uma notificação ser entregue antes de enviar outra 


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews" ;


// async function getSubscribers(): Promise<any[]> {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data;
// };

type User = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async (): Promise<User[]> =>{
    const users = await axios.get(`${baseUrl}/subscribers/all`)
    return users.data.map((response: any) => {
        return{
            id:response.id,
            name: response.name,
            email: response.email
        }
    }) 
}

async function createNews(title: string, content: string, data: number): Promise<void>{
    await axios.put(`${baseUrl}/news`, {
        title: "Novidade a caminho",
        content: "Labenu: uma nova escola de programação",
        date: 1590522289000
    })
}

// const sendNotifications = async (users: User[], message: string): Promise<void> =>{
//     const promiseArray: Promise<any>[] = []
//     for (const user of users) {
//         await axios.post(`${baseUrl}/notifications/send`, {
//             subscriberId: user.id,
//             message: message,
//         })
//     }
//     console.log("todas mensagens enviadas")
// }

const sendNotifications = async (users: User[], message: string): Promise<void> =>{
    const promiseArray = []
    for (const user of users) {
        promiseArray.push(
            await axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: user.id,
                message: message,
            })
        ) 
    }
    await Promise.all(promiseArray)
}

// ------------------------- 7 ---------------------------------

const createSubscriber = async (name: string, email: string) => {
    await axios.put(`${baseUrl}/subscribers`, {
      name,
      email
    });
  };

const createAndSendNotifications = async () => {
  try {
    await createNews(
      "Novidade a caminho",
      "Labenu: uma nova escola de programação",
      1590522289000
    );

    const users = await getSubscribers();

    await sendNotifications(users, "Testando mensagens");
  } catch (err) {
    console.log("err: ", err.message);
  }
};

const getAllNotifications = async (): Promise<any> => {
    const users = await getSubscribers();
  
    const notificationPromises = [];
    for (const user of users) {
      notificationPromises.push(
        axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
      );
    }
  
    const result = await Promise.all(notificationPromises);
  
    const dataFromResult = result.map((res) => res.data);
  
    return dataFromResult;
  };

//TODO Desafio aula 47 criar uma arrow function 5 segundos de espera







