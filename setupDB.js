const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const dbName = "HW1_DB";
let db;

/**
 * 1. Create a DB file if there doesn't exist already
 * 2. Connect to the Database
 * 3. Create users table
 * 4. Create prompt_history table
 */

try {
    createDatabase((err) => {
        if (err != null) {
            console.log(
                "Error While Creating db file inside ./database/ folder"
            );
            throw err;
        }

        db = new sqlite3.Database(
            "./database/" + dbName + ".db",
            sqlite3.OPEN_READWRITE,
            (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log(`Connected to the database ${dbName}.db`);
            }
        );

        createVaccineTable((res) => {
            if (res == true) {
                console.log(`Created Vaccine Table inside ${dbName}.db`);
            } else {
                console.log(`Unable to create Vaccine Table inside ${dbName}.db`);
            }
        });

        createPatientTable((res) => {
            if (res == true) {
                console.log(`Created Patient Table inside ${dbName}.db`);
            } else {
                console.log(
                    `Unable to create Patient Table inside ${dbName}.db`
                );
            }
        });
        createNurseTable((res) => {
            if (res == true) {
                console.log(`Created Nurse Table inside ${dbName}.db`);
            } else {
                console.log(
                    `Unable to create Nurse Table inside ${dbName}.db`
                );
            }
        });
        createTimeSlotTable((res) => {
            if (res == true) {
                console.log(`Created TimeSlot Table inside ${dbName}.db`);
            } else {
                console.log(
                    `Unable to create TimeSlot Table inside ${dbName}.db`
                );
            }
        });
        createVaccinationScheduleTable((res) => {
            if (res == true) {
                console.log(`Created Vaccination Schedule Table inside ${dbName}.db`);
            } else {
                console.log(
                    `Unable to create Vaccination Schedule Table inside ${dbName}.db`
                );
            }
        });
        createNurseTimeSlotScheduleTable((res) => {
            if (res == true) {
                console.log(`Created Nurse Time Slot Schedule Table inside ${dbName}.db`);
            } else {
                console.log(
                    `Unable to create Nurse Time Slot Schedule Table inside ${dbName}.db`
                );
            }
        });
        createEligibiltyTable((res) => {
            if (res == true) {
                console.log(`Created Eligibilty Table inside ${dbName}.db`);
            } else {
                console.log(
                    `Unable to create Eligibilty Table inside ${dbName}.db`
                );
            }
        });
        createVaccineDeliveryTable((res) => {
            if (res == true) {
                console.log(`Created Vaccine Delivery Table inside ${dbName}.db`);
            } else {
                console.log(
                    `Unable to create Vaccine Delivery Table inside ${dbName}.db`
                );
            }
        });
        createVaccinationRecordTable((res) => {
            if (res == true) {
                console.log(`Created Vaccination Record Table inside ${dbName}.db`);
            } else {
                console.log(
                    `Unable to create Vaccination Record Table inside ${dbName}.db`
                );
            }
        });
        createAdminTable((res) => {
            if (res == true) {
                console.log(`Created Admin Table inside ${dbName}.db`);
            } else {
                console.log(
                    `Unable to create Admin Table inside ${dbName}.db`
                );
            }
        }); 
        
    });
} catch (e) {
    console.log(e);
}

// Create a file named HW1_DB.db if not present
function createDatabase(callback) {
    // open function with filename, file opening mode and callback function
    fd = fs.open("./database/" + dbName + ".db", "w+", function (err, file) {
        if (err) throw callback(err);
        console.log("Created DB");
        return callback(null);
    });

    // fs.close(fd, (err)=>{
    //     if (err) {
    //         console.log("Problems with closing the file");
    //         throw callback(err);
    //     }

    //     return callback(null)
    // })
}

// Creates prompt_history table
function createVaccineTable(callback) {
    sqlQuery =
        "CREATE TABLE vaccine (" +
        "    vaccine_id         INTEGER        PRIMARY KEY AUTOINCREMENT," +
        "    name       VARCHAR (400)," +
        "    company_name        VARCHAR (200)," +
        "    no_doses            VARCHAR (200)," +
        "    discription   VARCHAR (1000),"+
        "    availability   VARCHAR (1000),"+
        "    on_hold   VARCHAR (1000)"+        
        ");";

    sqlParams = [];

    return db.run(sqlQuery, sqlParams, function (err) {
        if (err != null) {
            console.log("Error while creating Table");
            console.log(err);
            return callback(false);
        }

        return callback(true);
    });
}

// Creates users table
function createPatientTable(callback) {
    sqlQuery =
        "CREATE TABLE patient ( " +
        "   patient_id         INTEGER        PRIMARY KEY AUTOINCREMENT," +
        "   F_name     VARCHAR (200), " +
        "   mi VARCHAR (500), " +
        "   l_name    VARCHAR (200), " +
        "   ssn     VARCHAR (500), " +
        "   age     INTEGER, " +
        "   gender     VARCHAR (500), " +
        "   race     VARCHAR (500), " +
        "   address     VARCHAR (1000), " +
        "   occupation_class     VARCHAR (500), " +
        "   medical_history     VARCHAR (500), " +
        "   phone_no     VARCHAR (10), " +
        "   password     VARCHAR (500), " +
        "   user_id     VARCHAR (500) UNIQUE , " +
        "   eligibility_status     VARCHAR (500)" +
        ");";

    sqlParams = [];

    return db.run(sqlQuery, sqlParams, function (err) {
        if (err != null) {
            console.log("Error while creating Table");
            console.log(err);
            return callback(false);
        }

        return callback(true);
    });
}
// Creates users table
function createNurseTable(callback) {
    sqlQuery =
        "CREATE TABLE nurse ( " +
        "   nurse_id         INTEGER        PRIMARY KEY AUTOINCREMENT," +
        "   F_name     VARCHAR (200), " +
        "   mi VARCHAR (500), " +
        "   l_name    VARCHAR (200), " +
        "   employee_id     VARCHAR (500), " +
        "   age     INTEGER, " +
        "   gender     VARCHAR (500), " +
        "   address     VARCHAR (1000), " +
        "   phone_no     VARCHAR (10), " +
        "   password     VARCHAR (500), " +
        "   user_id     VARCHAR (500) UNIQUE " +
        ");";

    sqlParams = [];

    return db.run(sqlQuery, sqlParams, function (err) {
        if (err != null) {
            console.log("Error while creating Table");
            console.log(err);
            return callback(false);
        }

        return callback(true);
    });
}

function createTimeSlotTable(callback) {
    sqlQuery =
        "CREATE TABLE timeSlot ( " +
        "   time_slot_id         INTEGER        PRIMARY KEY AUTOINCREMENT," +
        "   date     VARCHAR (500), " +
        "   start_time VARCHAR (500), " +
        "   end_time    VARCHAR (500), " +
        "   max_capacity     INTEGER " +
        ");";

    sqlParams = [];

    return db.run(sqlQuery, sqlParams, function (err) {
        if (err != null) {
            console.log("Error while creating Table");
            console.log(err);
            return callback(false);
        }

        return callback(true);
    });
}

function createVaccinationScheduleTable(callback) {
    sqlQuery =
        "CREATE TABLE vaccinationSchedule ( " +
        "   schedule_id         INTEGER        PRIMARY KEY AUTOINCREMENT," +
        "   patient_id     INTEGER, " +
        "   time_slot_id INTEGER, " +
        "   vaccine_id    INTEGER, " +
        "   dose_number     INTEGER, " +
        "   FOREIGN KEY(patient_id) REFERENCES patient(patient_id), "+
        "   FOREIGN KEY(time_slot_id) REFERENCES timeSlot(time_slot_id), "+
        "   FOREIGN KEY(vaccine_id) REFERENCES vacccine(vacccine_id) "+
        ");";

    sqlParams = [];

    return db.run(sqlQuery, sqlParams, function (err) {
        if (err != null) {
            console.log("Error while creating Table");
            console.log(err);
            return callback(false);
        }

        return callback(true);
    });
}



function createNurseTimeSlotScheduleTable(callback) {
    sqlQuery =
        "CREATE TABLE nurseTimeSlotSchedule ( " +
        "   assingment_id         INTEGER        PRIMARY KEY AUTOINCREMENT," +
        "   nurse_id     VARCHAR (500), " +
        "   time_slot_id INTEGER, " +
        "   FOREIGN KEY(time_slot_id) REFERENCES timeSlot(time_slot_id), "+
        "   FOREIGN KEY(nurse_id) REFERENCES nurse(nurse_id) "+
        ");";

    sqlParams = [];

    return db.run(sqlQuery, sqlParams, function (err) {
        if (err != null) {
            console.log("Error while creating Table");
            console.log(err);
            return callback(false);
        }

        return callback(true);
    });
}

function createEligibiltyTable(callback) {
    sqlQuery =
        "CREATE TABLE eligibilty ( " +
        "   patient_id     INTEGER," +
        "   Ineligible     VARCHAR (500), " +
        "   FOREIGN KEY(patient_id) REFERENCES patient(patient_id)"+
        ");";

    sqlParams = [];

    return db.run(sqlQuery, sqlParams, function (err) {
        if (err != null) {
            console.log("Error while creating Table");
            console.log(err);
            return callback(false);
        }

        return callback(true);
    });
}

function createVaccineDeliveryTable(callback) {
    sqlQuery =
        "CREATE TABLE vaccineDelivery ( " +
        "   vaccine_id         INTEGER," +
        "   delivery_date     VARCHAR (500), " +
        "   quantity     VARCHAR (500), " +
        "   FOREIGN KEY(vaccine_id) REFERENCES vacccine(vacccine_id) "+
        ");";

    sqlParams = [];

    return db.run(sqlQuery, sqlParams, function (err) {
        if (err != null) {
            console.log("Error while creating Table");
            console.log(err);
            return callback(false);
        }

        return callback(true);
    });
}
function createVaccinationRecordTable(callback) {
    sqlQuery =
        "CREATE TABLE vaccinationRecord ( " +
        "   record_id         INTEGER        PRIMARY KEY AUTOINCREMENT," +
        "   patient_id     VARCHAR (500), " +
        "   nurse_id     VARCHAR (500), " +
        "   time_slot_id     VARCHAR (500), " +
        "   vaccine_id     VARCHAR (500), " +
        "   dose_no     VARCHAR (500), " +
        "   vaccination_time     VARCHAR (500), " +
        "   FOREIGN KEY(patient_id) REFERENCES patient(patient_id), "+
        "   FOREIGN KEY(time_slot_id) REFERENCES timeSlot(time_slot_id), "+
        "   FOREIGN KEY(vaccine_id) REFERENCES vacccine(vacccine_id), "+
        "   FOREIGN KEY(nurse_id) REFERENCES nurse(nurse_id) "+
        ");";

    sqlParams = [];

    return db.run(sqlQuery, sqlParams, function (err) {
        if (err != null) {
            console.log("Error while creating Table");
            console.log(err);
            return callback(false);
        }

        return callback(true);
    });
}

function createAdminTable(callback) {
    sqlQuery =
        "CREATE TABLE admin ( " +
        "   password     VARCHAR (500), " +
        "   user_id     VARCHAR (500) UNIQUE" +
       
        ");";

    sqlParams = [];

    return db.run(sqlQuery, sqlParams, function (err) {
        if (err != null) {
            console.log("Error while creating Table");
            console.log(err);
            return callback(false);
        }

        return callback(true);
    });
}
function insertNewadmin() {
  
        queryString = "INSERT INTO admin(user_id, password) ";
        queryString += " VALUES('admin', 'admin');";

        sqlParams = [];

        return db.run(queryString, sqlParams, function (err) {
            if (err != null) {
                console.log("Error while inserting Table");
                console.log(err);
                console.log(false)
                // return callback(false);
            }
            console.log(true)
            // return callback(true);
        });

        
   
}

async function checkadmin() {
    queryString = "SELECT * FROM admin";
    try {
        const result = await db.get(queryString, []);
        return result
        // if (result == undefined) {
        //     return false;
        // }
        // return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

module.exports = {insertNewadmin,checkadmin}
