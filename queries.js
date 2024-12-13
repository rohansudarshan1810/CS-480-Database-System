const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'uih',
  password: 'password',
  port: 5432,
})

const admin = (request, response) => {
    pool.query('SELECT * FROM admin', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const nurse = (request, response) => {
    pool.query('SELECT * FROM nurse', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const insertNurse=(request, response)=>{

    console.log("request.body: ",request.body)
    const {firstName, middleName,lastName,employeeId,age,gender,address,phNumber,userId,password}=request.body
    pool.query('INSERT INTO nurse (F_name, mi,l_name,employee_id,age,gender,address,phone_no,user_id,password) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10)', [firstName, middleName,lastName,employeeId,age,gender,address,phNumber,userId,password], (error, results) => {
      if (error) {
        response.status(200).json({"error":error.message})

        // throw error
      }else{
      response.status(200).send(`inserted new user ${firstName}`)
      }
    })
  }

  const insertVaccine=(request, response)=>{
    console.log("request.body: ")
    const {name, company_name,no_doses,discription,availability,on_hold}=request.body
    console.log("data: ",name, company_name,no_doses,discription,availability,on_hold)
    pool.query('INSERT INTO vaccine (name, company_name,no_doses,discription,availability,on_hold) VALUES ($1,$2,$3,$4,$5,$6)', [name, company_name,no_doses,discription,availability,on_hold], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Vaccine insert`)
    })
  }

  const deleteNurse = (request, response) => {
    console.log("request.body: ",request.body)
    const {id}=request.body
    console.log("id: ",id)

    pool.query('DELETE FROM nurse WHERE nurse_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  // const deleteTimeSlot = (request, response) => {
  //   console.log("request.body: ",request.body)
  //   const {id}=request.body
  //   console.log("id: ",id)

  //   pool.query('DELETE FROM nurse WHERE nurse_id = $1', [id], (error, results) => {
  //     if (error) {
  //       throw error
  //     }
  //     response.status(200).send(`User deleted with ID: ${id}`)
  //   })
  // }


  const vaccine = (request, response) => {
    pool.query('SELECT * FROM vaccine', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  const updateNurse = (request, response) => {
    // const id = parseInt(request.params.id)
    console.log("request.body: ",request.body)
    const {nurse_id,firstName, middleName,lastName,employeeId,age,gender,address,phNumber,userId,password}=request.body

  
    pool.query(
      'UPDATE nurse SET F_name=$1, mi=$2,l_name=$3,employee_id=$4,age=$5,gender=$6,address=$7,phone_no=$8,user_id=$9,password=$10 WHERE nurse_id = $11',
      [firstName, middleName,lastName,employeeId,age,gender,address,phNumber,userId,password,nurse_id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Nurse modified with ID: ${nurse_id}`)
      }
    )
  }


  const updatePatient = (request, response) => {
    // const id = parseInt(request.params.id)
    console.log("request.body: ",request.body)
    const {firstName, middleName,lastName,ssn,age,gender,address,phNumber,occupation_class,eligibility_status,medical_history,userId,password,patient_id}=request.body

  
    pool.query(
      'UPDATE patient SET F_name=$1, mi=$2,l_name=$3,ssn=$4,age=$5,gender=$6,address=$7,phone_no=$8,occupation_class=$9,eligibility_status=$10,medical_history=$11,user_id=$12,password=$13 WHERE patient_id = $14',
      [firstName, middleName,lastName,ssn,age,gender,address,phNumber,occupation_class,eligibility_status,medical_history,userId,password,patient_id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Patient modified with ID: ${patient_id}`)
      }
    )
  }



  const updateVaccine = (request, response) => {
    // const id = parseInt(request.params.id)
    console.log("request.body: ",request.body)
    const {name, company_name,no_doses,discription,availability,on_hold,vaccine_id}=request.body

  
    pool.query(
      'UPDATE vaccine SET name=$1, company_name=$2,no_doses=$3,discription=$4,availability=$5,on_hold=$6 WHERE vaccine_id = $7',
      [name, company_name,no_doses,discription,availability,on_hold,vaccine_id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Vaccine modified with ID: ${vaccine_id}`)
      }
    )
  }

  const deleteVaccine = (request, response) => {
    console.log("request.body: ",request.body)
    const {id}=request.body
    console.log("id: ",id)

    pool.query('DELETE FROM vaccine WHERE vaccine_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`vaccine deleted with ID: ${id}`)
    })
  }

  const insertPatient=(request, response)=>{

    console.log("request.body: ",request.body)
    const {firstName, middleName,lastName,ssn,age,gender,address,phNumber,occupation_class,eligibility_status,medical_history,user_id,password}=request.body
    pool.query('INSERT INTO patient (F_name, mi,l_name,ssn,age,gender,address,phone_no,occupation_class,eligibility_status,medical_history,user_id,password) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)', [firstName, middleName,lastName,ssn,age,gender,address,phNumber,occupation_class,eligibility_status,medical_history,user_id,password], (error, results) => {
      if (error) {
        response.status(200).json({"error":error.message})

        // throw error
      }
      response.status(200).send(`inserted new user ${firstName}`)
      
    })
  }
  const patient = (request, response) => {
    pool.query('SELECT * FROM patient', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const timeSlotNew = (request, response) => {
    pool.query('SELECT t.*, COALESCE(s.total_assignments, 0) AS total_assignments FROM  timeSlot t LEFT JOIN ( SELECT time_slot_id,  COUNT(*) AS total_assignments FROM  nurseTimeSlotSchedule GROUP BY time_slot_id ) s ON t.time_slot_id = s.time_slot_id;', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const timeSlot= (request, response) => {
    pool.query('SELECT * FROM timeSlot', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const insertTimeSlot=(request, response)=>{

    console.log("request.body: ",request.body)
    const {date, start_time,end_time,max_capacity}=request.body
    
    pool.query('INSERT INTO timeSlot (date, start_time,end_time,max_capacity) VALUES ($1, $2,$3,$4)', [date, start_time,end_time,max_capacity], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Inserted`)
    })
  }





  const updateTimeSlot=(request, response)=>{

   // const id = parseInt(request.params.id)
   console.log("request.body: ",request.body)
   const {date, start_time,end_time,max_capacity,time_slot_id}=request.body

   console.log(date, start_time,end_time,max_capacity,time_slot_id)
   pool.query(
     'UPDATE timeSlot SET date=$1, start_time=$2,end_time=$3,max_capacity=$4 WHERE time_slot_id = $5',
     [date, start_time,end_time,max_capacity,time_slot_id],
     (error, results) => {
       if (error) {
         throw error
       }
       response.status(200).send(`timeSlot modified with ID: ${time_slot_id}`)
     }
   )
  }

  
  const insertPatientAppointment=(request, response)=>{

    console.log("request.body: ",request.body)
    const {patient_id, time_slot_id,vaccine_id,no_dose}=request.body
    pool.query('INSERT INTO vaccinationSchedule (patient_id, time_slot_id,vaccine_id,dose_number) VALUES ($1, $2,$3,$4)', [patient_id, time_slot_id,vaccine_id,no_dose], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const PatientsVaccinationSchedule = (request, response) => {
    const {id}=request.body
    console.log(id)

    pool.query('SELECT * FROM vaccinationSchedule  WHERE patient_id = $1', [id],(error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const vaccinationSchedule = (request, response) => {
    const {id}=request.body
    console.log(id)

    pool.query('SELECT * FROM vaccinationSchedule ', [id],(error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const deleteVaccinationSchedule = (request, response) => {
    const {id}=request.body
    console.log(id)

    pool.query('DELETE FROM vaccinationSchedule WHERE schedule_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`vaccinationSchedule deleted with ID: ${id}`)
    })
  }


  const insertNurseTimeSlotScheduleTable=(request, response)=>{

    console.log("request.body: ",request.body)
    const {nurse_id, time_slot_id}=request.body
    pool.query('INSERT INTO nurseTimeSlotSchedule (nurse_id, time_slot_id) VALUES ($1, $2)', [nurse_id, time_slot_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const nurseTimeSlotsInfo = (request, response) => {
    const {id}=request.body
    console.log(id)
    // SELECT n.*, t.date, t.start_time, t.end_time, t.max_capacity FROM nurseTimeSlotSchedule n INNER JOIN timeSlot t ON n.time_slot_id = t.time_slot_id WHERE n.nurse_id = $1;
    pool.query('SELECT n.*, t.date, t.start_time, t.end_time, t.max_capacity FROM nurseTimeSlotSchedule n INNER JOIN timeSlot t ON n.time_slot_id = t.time_slot_id WHERE n.nurse_id = $1;', [id],(error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const nurseTimeSlots = (request, response) => {
    const {id}=request.body
    console.log(id)

    pool.query('SELECT * FROM nurseTimeSlotSchedule  WHERE nurse_id = $1', [id],(error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const deleteNurseTime = (request, response) => {
    console.log("request.body: ",request.body)
    const {id}=request.body
    console.log("id: ",id)

    pool.query('DELETE FROM nurseTimeSlotSchedule WHERE assingment_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`nurseTimeSlotSchedule deleted with ID: ${id}`)
    })
  }

  const updateVaccinatedOnHold = (request, response) => {
    // const id = parseInt(request.params.id)
    console.log("request.body: ",request.body)
    const {vaccine_id}=request.body

    pool.query(
      'UPDATE vaccine SET on_hold=on_hold::integer - 1 WHERE vaccine_id = $1',
      [vaccine_id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Vaccine modified with ID: ${vaccine_id}`)
      }
    )
  }

  const updateVaccineOnHold = (request, response) => {
    // const id = parseInt(request.params.id)
    console.log("request.body: ",request.body)
    const {name, company_name,no_doses,discription,availability,on_hold,vaccine_id}=request.body

  
    pool.query(
      'UPDATE vaccine SET name=$1, company_name=$2,no_doses=$3,discription=$4,availability=$5,on_hold=$6 WHERE vaccine_id = $7',
      [name, company_name,no_doses,discription,availability,on_hold,vaccine_id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Vaccine modified with ID: ${vaccine_id}`)
      }
    )
  }


  const insertVaccineDelivery=(request, response)=>{

    console.log("request.body: ",request.body)
    const {vaccine_id, delivery_date ,quantity}=request.body
    pool.query('INSERT INTO vaccineDelivery (vaccine_id, delivery_date ,quantity) VALUES ($1, $2, $3)', [vaccine_id, delivery_date ,quantity], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const deleteTimeSlot = (request, response) => {
    console.log("request.body: ",request.body)
    const {time_slot_id}=request.body
    console.log("id: ",time_slot_id)

    pool.query('DELETE FROM timeSlot WHERE time_slot_id = $1', [time_slot_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`deleteTimeSlot deleted with ID: ${time_slot_id}`)
    })
  }


const getAppointments=(request, response)=>{

  pool.query(
'SELECT *, CASE WHEN vr.vaccine_id IS NOT NULL THEN $1 ELSE $2 END AS is_appointment_complete FROM vaccinationSchedule v JOIN patient p ON v.patient_id = p.patient_id JOIN timeSlot t ON v.time_slot_id = t.time_slot_id JOIN vaccine vacc ON v.vaccine_id = vacc.vaccine_id LEFT JOIN vaccinationRecord vr ON vacc.vaccine_id = vr.vaccine_id  AND v.patient_id = vr.patient_id;',["Completed","Incomplete"],
    (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
})

}
const getPrevDoses=(request, response)=>{
 
  console.log("request.body: ",request.body)
  const {patient_id,vaccine_id}=request.body
  pool.query(
    
// '  SELECT vr.dose_no AS record_dose_number,  vs.dose_number AS schedule_dose_number FROM vaccinationRecord vr LEFT JOIN vaccinationSchedule vs ON vr.patient_id = vs.patient_id AND vr.vaccine_id = vs.vaccine_id WHERE vr.patient_id = $1 OR vr.vaccine_id = $2',[patient_id,vaccine_id],
'SELECT dose_no FROM vaccinationRecord WHERE patient_id = $1 AND vaccine_id = $2 UNION ALL SELECT dose_number FROM vaccinationSchedule WHERE patient_id =$1 AND vaccine_id = $2;',[patient_id,vaccine_id],        
(error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
  // SELECT vr.dose_no AS record_dose_number,  vs.dose_number AS schedule_dose_number FROM vaccinationRecord vr LEFT JOIN vaccinationSchedule vs ON vr.patient_id = vs.patient_id AND vr.vaccine_id = vs.vaccine_id WHERE vr.patient_id = $1 AND vr.vaccine_id = $2';
}
const getTotalNurseVaccination=(request, response)=>{
  console.log("request.body: ",request.body)
  const {nurse_id,time_slot_id}=request.body
  pool.query(
    

'SELECT COUNT(*) FROM vaccinationRecord WHERE nurse_id = $1 AND time_slot_id = $2;',[nurse_id,time_slot_id],
        (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
}

const getPatientAppointmentsDetauils=(request, response)=>{
  console.log("request.body: ",request.body)
  const {id}=request.body
  pool.query(
'SELECT *, CASE WHEN vr.vaccine_id IS NOT NULL THEN $1 ELSE $2 END AS vaccine_record_status FROM vaccinationSchedule vs JOIN patient p ON vs.patient_id = p.patient_id JOIN vaccine v ON vs.vaccine_id = v.vaccine_id JOIN timeSlot t ON vs.time_slot_id = t.time_slot_id LEFT JOIN vaccinationRecord vr ON vs.vaccine_id = vr.vaccine_id AND vs.patient_id = vr.patient_id WHERE vs.patient_id = $3 ;',["Completed","Incomplete",id],
        (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
}

const patientvaccinationSchedulecheck=(request, response)=>{
  console.log("request.body: ",request.body)
  const {patient_id,time_slot_id}=request.body
  console.log(patient_id)

  pool.query('SELECT * FROM vaccinationSchedule  WHERE patient_id = $1 AND time_slot_id = $2;', [patient_id,time_slot_id],(error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })

}

const insertVaccinationRecord=(request, response)=>{

  console.log("request.body: ",request.body)
  const {vaccine_id,patient_id,time_slot_id,dose_no,nurse_id }=request.body
  pool.query('INSERT INTO vaccinationRecord (vaccine_id,patient_id,time_slot_id,dose_no,nurse_id) VALUES ($1, $2, $3,$4,$5)', [vaccine_id,patient_id,time_slot_id,dose_no,nurse_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

  module.exports = {admin,updatePatient,
    PatientsVaccinationSchedule,
    insertPatientAppointment,
    insertVaccinationRecord,
    deleteNurseTime,
    nurseTimeSlots,
    insertNurseTimeSlotScheduleTable,
    insertNurse,
    nurse,
    insertVaccineDelivery,
    timeSlot,
    updateVaccinatedOnHold,
    updateNurse,
    deleteNurse,
    insertVaccine,
    insertTimeSlot,
    timeSlotNew,
    vaccine,
    deleteTimeSlot,
    getPrevDoses,
    updateVaccine,
    insertPatient,
    getPatientAppointmentsDetauils,
    updateTimeSlot,
    getTotalNurseVaccination,
    deleteVaccinationSchedule,
    updateVaccineOnHold,
    deleteVaccine,
    getAppointments,
    nurseTimeSlotsInfo,
   patientvaccinationSchedulecheck,
    patient}