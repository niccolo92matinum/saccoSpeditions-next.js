import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {

  apiVersion: '2020-03-02',
});

export default async function handler(req, res) {



 
  const dat = JSON.parse(req.body);
  const calculatePrice = (data) => {
    // _______TIPO______
    let priceByType;
    if (data.tipo === 1) {

      priceByType = 5;
    } else if (data.tipo === 2) {
      priceByType = 10;
    } else if (data.tipo === 3) {
      priceByType = 15;
    } 
    // ________PESO_________
    let priceByWeigth;
    if (data.peso < 5) {
      priceByWeigth = 3;
    } else if (data.peso > 5) {
      priceByWeigth = 10;
    }
    // ______LARGHEZZA____
    let priceBywidth = 5

    if (data.larghezza < 30) {
      priceBywidth = 10;
    } else if (data.larghezza > 30) {
      priceBywidth = 20;
    }
    // ______ALTEZZA_____
    let priceByHeigth = 15

    if (data.altezza < 20) {
      priceByHeigth = 3;
    } 
    // ______LUNGHEZZA_______
    let priceByLength = 15
    if (data.lunghezza < 20) {
      priceByLength = 3;
    } 

    const final =
      priceByType +
      priceByWeigth +
      priceBywidth +
      priceByLength +
      priceByHeigth;
    return final;
  };

let price =  calculatePrice(dat)


  if(dat.nome === 'DHL'){
     price += 5
   
  }else{
                                 
      price += 15
    
  }
  


  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Spedizione',
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      payment_intent_data: { metadata: { orderID: 'orderID' } },
      mode: 'payment',
      success_url: 'https://sacco-speditions-next-js.vercel.app/',
      cancel_url: 'https://sacco-speditions-next-js.vercel.app/',
    });
  
    res.json(session);
  } catch (err) {
   
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}