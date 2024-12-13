

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
var cors = require('cors');
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(
  cors({
    origin: ["http://localhost:3000", "*"], // Allow access from any origin
    credentials: true,
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  })
);

app.get('/', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  response.send({ "msg": "This has CORS enabled 🎈" })
  // response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.admin)

app.post('/insertNurse', db.insertNurse)

app.post('/deleteNurse',db.deleteNurse)

app.post('/updateNurse', db.updateNurse)

app.post('/updatePatient', db.updatePatient)

app.post('/insertPatientAppointment',db.insertPatientAppointment)

app.post('/updateVaccineOnHold',db.updateVaccineOnHold)

app.post('/updateTimeSlot',db.updateTimeSlot)

app.post('/getPatientAppointmentsDetails',db.getPatientAppointmentsDetauils)

app.post('/updateVaccinatedOnHold',db.updateVaccinatedOnHold)

app.post('/insertVaccineDelivery',db.insertVaccineDelivery)

app.get('/getAppointments',db.getAppointments)

app.post('/deleteVaccinationSchedule',db.deleteVaccinationSchedule)

app.post('/patientsVaccinationSchedule',db.PatientsVaccinationSchedule)

app.post('/insertVaccinationRecord',db.insertVaccinationRecord)

app.get('/nurse', db.nurse)

app.get('/vaccine',db.vaccine)

app.get('/patient',db.patient)

app.get('/timeSlot',db.timeSlot)

app.post('/insertNurseTimeSlotScheduleTable',db.insertNurseTimeSlotScheduleTable)

app.post('/insertVaccine',db.insertVaccine)

app.post('/insertTimeSlot',db.insertTimeSlot)

app.post('/nurseTimeSlots',db.nurseTimeSlots)

app.post('/deleteNurseTime',db.deleteNurseTime)

app.post('/updateVaccine',db.updateVaccine)

app.post('/deleteVaccine',db.deleteVaccine)

app.post('/insertPatient',db.insertPatient)

app.post('/prevDoses',db.getPrevDoses)

app.get('/timeSlotNew',db.timeSlotNew)



app.post('/nurseTimeSlotsInfo',db.nurseTimeSlotsInfo)

app.post('/patientvaccinationSchedulecheck',db.patientvaccinationSchedulecheck)

app.post('/deleteTimeSlot',db.deleteTimeSlot)

app.get('/getTotalNurseVaccination',db.getTotalNurseVaccination)



app.get('/cors', (req, res) => {
  res.send('This has CORS enabled 🎈')
})
app.post('/api/insertNurse', function(req, res) {
  const body = req.body;
 console.log(body)
 db.insertNurse(body)
  res.send(body);
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })