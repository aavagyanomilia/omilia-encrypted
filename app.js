// require('dotenv').config();
// // const {Test_clients} = require("./models/index");
const express = require('express');
const app = express();
app.use(express.json());
// const port = process.env.PORT;
// const dbPw = process.env.dbPw;
// const mongoose = require('mongoose');
// const User = require('./schema');
// const { v4: uuidv4 } = require('uuid');
// const https = require('https');

app.get('/', async (req, res, next) => {
  res.status(200).send('Cool man');
});

app.post('/omilia-encrypted', async (req, res, next) => {
    console.log(req.body);
    res.status(200).json(req.body)
})

app.listen(3000, () => {
    console.log('Server started');
})

// mongoose
//   .connect(
//     `mongodb+srv://admin:${dbPw}@cluster0.zb5dr.mongodb.net/Omilia?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     console.log('Connected to the database ');
//   })
//   .catch((err) => {
//     console.error(`Error connecting to the database. ${err}`);
//   });

// // Ani lookup
// app.get('/aniLookup/:phoneNumber', async (req, res) => {
//   try {
//     let user = await User.find({ phoneNumber: req.params.phoneNumber }) //.group()
//       .lean()
//       .exec();
//     user.forEach(
//       (obj) =>
//         (obj.account = {
//           number: obj.accountNumber,
//           compliance: { pciDss: { complianceStatus: obj.complianceStatus } },
//           labels: [obj.product],
//         })
//     );
//     let toReturn = {
//       recordCount: user.length,
//       records: user,
//     };
//     res.status(200).send(toReturn);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Merchant ID lookup
// app.get('/midLookup/:mid', async (req, res) => {
//   try {
//     let user = await User.find({ merchantId: req.params.mid }).lean().exec();
//     user.forEach(
//       (obj) =>
//         (obj.account = {
//           number: obj.accountNumber,
//           compliance: { pciDss: { complianceStatus: obj.complianceStatus } },
//           labels: [obj.product],
//         })
//     );

//     let toReturn = {
//       recordCount: user.length,
//       records: user,
//     };

//     res.status(200).send(toReturn);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Boarding lookup
// app.get('/boarding/:recordId', async (req, res) => {
//   try {
//     let user = await User.find({ _id: req.params.recordId }).lean().exec();

//     let { name, city, street1, country, state } = user[0];

//     let toReturn = {
//       name,
//       address: { city, street1, state, country },
//     };

//     res.status(200).send(toReturn);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Get all
// app.get('/getAll', async (req, res) => {
//   try {
//     let user = await User.find().group('phoneNumber');
//     // user.forEach(
//     //   (obj) =>
//     //     (obj.account = {
//     //       number: obj.accountNumber,
//     //       compliance: { pciDss: { complianceStatus: obj.complianceStatus } },
//     //       labels: [obj.product],
//     //     })
//     // );

//     let toReturn = {
//       recordCount: user.length,
//       records: user,
//     };

//     res.status(200).send(toReturn);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Token
// app.post('/token', async (req, res) => {
//   try {
//     const token = { token: 'Bearer token' };
//     res.status(200).json(token);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Create user
// app.post('/createUser', async (req, res) => {
//   try {
//     const user = await new User({ id: uuidv4(), ...req.body });
//     await user.save();
//     console.log(user);
//     // await user.save();
//     res.send(user);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // Wait
// app.post('/wait/:seconds', async (req, res, next) => {
//   try {
//     setTimeout(() => {
//       res.status(200).send(`${req.params.seconds / 1000} seconds past`);
//     }, req.params.seconds);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// arr = [3, 3, 4];

// const mode = (arr) =>
//   Object.entries(
//     arr.reduce((obj, el) => {
//       if (!obj[el]) obj[el] = 0;
//       obj[el]++;
//       return obj;
//     }, {})
//   ).reduce((m, el) => (el[1] > m[0] ? el : m));

// function teamBuild(arr, k) {
//   // let modeNum = +mode(arr)[0];
//   let modeFreq = +mode(arr)[1];
//   return arr.length - modeFreq >= k ? modeFreq + k : arr.length;
// }

// // console.log(mode(arr));

// console.log(teamBuild(arr, 3));

