--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Homebrew)
-- Dumped by pg_dump version 14.9 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admin; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.admin (
    password character varying(500),
    user_id character varying(500)
);


ALTER TABLE public.admin OWNER TO me;

--
-- Name: eligibilty; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.eligibilty (
    patient_id integer,
    ineligible character varying(500)
);


ALTER TABLE public.eligibilty OWNER TO me;

--
-- Name: nurse; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.nurse (
    nurse_id integer NOT NULL,
    f_name character varying(200),
    mi character varying(500),
    l_name character varying(200),
    employee_id character varying(500),
    age integer,
    gender character varying(500),
    address character varying(1000),
    phone_no character varying(10),
    password character varying(500),
    user_id character varying(500)
);


ALTER TABLE public.nurse OWNER TO me;

--
-- Name: nurse_nurse_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.nurse_nurse_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nurse_nurse_id_seq OWNER TO me;

--
-- Name: nurse_nurse_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.nurse_nurse_id_seq OWNED BY public.nurse.nurse_id;


--
-- Name: nursetimeslotschedule; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.nursetimeslotschedule (
    assingment_id integer NOT NULL,
    nurse_id integer,
    time_slot_id integer
);


ALTER TABLE public.nursetimeslotschedule OWNER TO me;

--
-- Name: nursetimeslotschedule_assingment_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.nursetimeslotschedule_assingment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nursetimeslotschedule_assingment_id_seq OWNER TO me;

--
-- Name: nursetimeslotschedule_assingment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.nursetimeslotschedule_assingment_id_seq OWNED BY public.nursetimeslotschedule.assingment_id;


--
-- Name: patient; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.patient (
    patient_id integer NOT NULL,
    f_name character varying(200),
    mi character varying(500),
    l_name character varying(200),
    ssn character varying(500),
    age integer,
    gender character varying(500),
    race character varying(500),
    address character varying(1000),
    occupation_class character varying(500),
    medical_history character varying(500),
    phone_no character varying(10),
    password character varying(500),
    user_id character varying(500),
    eligibility_status character varying(500)
);


ALTER TABLE public.patient OWNER TO me;

--
-- Name: patient_patient_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.patient_patient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.patient_patient_id_seq OWNER TO me;

--
-- Name: patient_patient_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.patient_patient_id_seq OWNED BY public.patient.patient_id;


--
-- Name: timeslot; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.timeslot (
    time_slot_id integer NOT NULL,
    date character varying(500),
    start_time character varying(500),
    end_time character varying(500),
    max_capacity integer
);


ALTER TABLE public.timeslot OWNER TO me;

--
-- Name: timeslot_time_slot_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.timeslot_time_slot_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.timeslot_time_slot_id_seq OWNER TO me;

--
-- Name: timeslot_time_slot_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.timeslot_time_slot_id_seq OWNED BY public.timeslot.time_slot_id;


--
-- Name: vaccinationrecord; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.vaccinationrecord (
    record_id integer NOT NULL,
    patient_id integer,
    nurse_id integer,
    time_slot_id integer,
    vaccine_id integer,
    dose_no character varying(500),
    vaccination_time character varying(500)
);


ALTER TABLE public.vaccinationrecord OWNER TO me;

--
-- Name: vaccinationrecord_record_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.vaccinationrecord_record_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vaccinationrecord_record_id_seq OWNER TO me;

--
-- Name: vaccinationrecord_record_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.vaccinationrecord_record_id_seq OWNED BY public.vaccinationrecord.record_id;


--
-- Name: vaccinationschedule; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.vaccinationschedule (
    schedule_id integer NOT NULL,
    patient_id integer,
    time_slot_id integer,
    vaccine_id integer,
    dose_number integer
);


ALTER TABLE public.vaccinationschedule OWNER TO me;

--
-- Name: vaccinationschedule_schedule_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.vaccinationschedule_schedule_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vaccinationschedule_schedule_id_seq OWNER TO me;

--
-- Name: vaccinationschedule_schedule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.vaccinationschedule_schedule_id_seq OWNED BY public.vaccinationschedule.schedule_id;


--
-- Name: vaccine; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.vaccine (
    vaccine_id integer NOT NULL,
    name character varying(400),
    company_name character varying(200),
    no_doses integer,
    discription character varying(1000),
    availability character varying(1000),
    on_hold character varying(1000)
);


ALTER TABLE public.vaccine OWNER TO me;

--
-- Name: vaccine_vaccine_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.vaccine_vaccine_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vaccine_vaccine_id_seq OWNER TO me;

--
-- Name: vaccine_vaccine_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.vaccine_vaccine_id_seq OWNED BY public.vaccine.vaccine_id;


--
-- Name: vaccinedelivery; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.vaccinedelivery (
    vaccine_id integer,
    delivery_date character varying(500),
    quantity character varying(500)
);


ALTER TABLE public.vaccinedelivery OWNER TO me;

--
-- Name: nurse nurse_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.nurse ALTER COLUMN nurse_id SET DEFAULT nextval('public.nurse_nurse_id_seq'::regclass);


--
-- Name: nursetimeslotschedule assingment_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.nursetimeslotschedule ALTER COLUMN assingment_id SET DEFAULT nextval('public.nursetimeslotschedule_assingment_id_seq'::regclass);


--
-- Name: patient patient_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.patient ALTER COLUMN patient_id SET DEFAULT nextval('public.patient_patient_id_seq'::regclass);


--
-- Name: timeslot time_slot_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.timeslot ALTER COLUMN time_slot_id SET DEFAULT nextval('public.timeslot_time_slot_id_seq'::regclass);


--
-- Name: vaccinationrecord record_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationrecord ALTER COLUMN record_id SET DEFAULT nextval('public.vaccinationrecord_record_id_seq'::regclass);


--
-- Name: vaccinationschedule schedule_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationschedule ALTER COLUMN schedule_id SET DEFAULT nextval('public.vaccinationschedule_schedule_id_seq'::regclass);


--
-- Name: vaccine vaccine_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccine ALTER COLUMN vaccine_id SET DEFAULT nextval('public.vaccine_vaccine_id_seq'::regclass);


--
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.admin (password, user_id) FROM stdin;
admin	admin
\.


--
-- Data for Name: eligibilty; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.eligibilty (patient_id, ineligible) FROM stdin;
\.


--
-- Data for Name: nurse; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.nurse (nurse_id, f_name, mi, l_name, employee_id, age, gender, address, phone_no, password, user_id) FROM stdin;
1	Hema		NK	1	24	Female	1117 south racine street	3124833569	hema	hema
7	Hemalatha		Ningappa kondakundi	2	20	Female	1117 south racine street	3124833569	hema	hemaa
8	Anu		NK	4	21	Female	1117 south racine street	3124833569	anu	anu
10	Subbu		KP	5	28	Female	1117 south racine street	3124833569	subbu	Subbu
11	Sandy		sri	6	26	Female	1117 south racine street	3124833569	sandy	sandy
12	Brunda		RN	7	21	Female	No.20 ,6th cross 11th main vrushabhavatinagar	123456789	brunda	brunda
14	Ananya		Roa	8	21	Female	No.20 ,6th cross 11th main vrushabhavatinagar	123456789	ananya	ananya
15	Ram		Roa	9	26	Male	No.20 ,6th cross 11th main vrushabhavatinagar	654321789	ram	ram
17	Raj		Roa	10	26	Male	No.20 ,6th cross 11th main vrushabhavatinagar	654321789	raj	raj
18	Jhon		Jack	11	21	Male	1117 south racine street	3124833569	jhon	jhon
\.


--
-- Data for Name: nursetimeslotschedule; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.nursetimeslotschedule (assingment_id, nurse_id, time_slot_id) FROM stdin;
\.


--
-- Data for Name: patient; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.patient (patient_id, f_name, mi, l_name, ssn, age, gender, race, address, occupation_class, medical_history, phone_no, password, user_id, eligibility_status) FROM stdin;
\.


--
-- Data for Name: timeslot; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.timeslot (time_slot_id, date, start_time, end_time, max_capacity) FROM stdin;
1	2023-11-28	9:00 am to 10:00 am		100
2	2023-11-28	10:00 am to 11:00 am		100
3	2023-11-28	10:00 am to 11:00 am		100
\.


--
-- Data for Name: vaccinationrecord; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.vaccinationrecord (record_id, patient_id, nurse_id, time_slot_id, vaccine_id, dose_no, vaccination_time) FROM stdin;
\.


--
-- Data for Name: vaccinationschedule; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.vaccinationschedule (schedule_id, patient_id, time_slot_id, vaccine_id, dose_number) FROM stdin;
\.


--
-- Data for Name: vaccine; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.vaccine (vaccine_id, name, company_name, no_doses, discription, availability, on_hold) FROM stdin;
\.


--
-- Data for Name: vaccinedelivery; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.vaccinedelivery (vaccine_id, delivery_date, quantity) FROM stdin;
\.


--
-- Name: nurse_nurse_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.nurse_nurse_id_seq', 18, true);


--
-- Name: nursetimeslotschedule_assingment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.nursetimeslotschedule_assingment_id_seq', 1, false);


--
-- Name: patient_patient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.patient_patient_id_seq', 1, false);


--
-- Name: timeslot_time_slot_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.timeslot_time_slot_id_seq', 3, true);


--
-- Name: vaccinationrecord_record_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.vaccinationrecord_record_id_seq', 1, false);


--
-- Name: vaccinationschedule_schedule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.vaccinationschedule_schedule_id_seq', 1, false);


--
-- Name: vaccine_vaccine_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.vaccine_vaccine_id_seq', 1, false);


--
-- Name: admin admin_user_id_key; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_user_id_key UNIQUE (user_id);


--
-- Name: nurse nurse_employee_id_key; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.nurse
    ADD CONSTRAINT nurse_employee_id_key UNIQUE (employee_id);


--
-- Name: nurse nurse_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.nurse
    ADD CONSTRAINT nurse_pkey PRIMARY KEY (nurse_id);


--
-- Name: nurse nurse_user_id_key; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.nurse
    ADD CONSTRAINT nurse_user_id_key UNIQUE (user_id);


--
-- Name: nursetimeslotschedule nursetimeslotschedule_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.nursetimeslotschedule
    ADD CONSTRAINT nursetimeslotschedule_pkey PRIMARY KEY (assingment_id);


--
-- Name: patient patient_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.patient
    ADD CONSTRAINT patient_pkey PRIMARY KEY (patient_id);


--
-- Name: patient patient_ssn_key; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.patient
    ADD CONSTRAINT patient_ssn_key UNIQUE (ssn);


--
-- Name: patient patient_user_id_key; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.patient
    ADD CONSTRAINT patient_user_id_key UNIQUE (user_id);


--
-- Name: timeslot timeslot_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.timeslot
    ADD CONSTRAINT timeslot_pkey PRIMARY KEY (time_slot_id);


--
-- Name: vaccinationrecord vaccinationrecord_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationrecord
    ADD CONSTRAINT vaccinationrecord_pkey PRIMARY KEY (record_id);


--
-- Name: vaccinationschedule vaccinationschedule_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationschedule
    ADD CONSTRAINT vaccinationschedule_pkey PRIMARY KEY (schedule_id);


--
-- Name: vaccine vaccine_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccine
    ADD CONSTRAINT vaccine_pkey PRIMARY KEY (vaccine_id);


--
-- Name: eligibilty eligibilty_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.eligibilty
    ADD CONSTRAINT eligibilty_patient_id_fkey FOREIGN KEY (patient_id) REFERENCES public.patient(patient_id);


--
-- Name: nursetimeslotschedule nursetimeslotschedule_nurse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.nursetimeslotschedule
    ADD CONSTRAINT nursetimeslotschedule_nurse_id_fkey FOREIGN KEY (nurse_id) REFERENCES public.nurse(nurse_id);


--
-- Name: nursetimeslotschedule nursetimeslotschedule_time_slot_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.nursetimeslotschedule
    ADD CONSTRAINT nursetimeslotschedule_time_slot_id_fkey FOREIGN KEY (time_slot_id) REFERENCES public.timeslot(time_slot_id);


--
-- Name: vaccinationrecord vaccinationrecord_nurse_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationrecord
    ADD CONSTRAINT vaccinationrecord_nurse_id_fkey FOREIGN KEY (nurse_id) REFERENCES public.nurse(nurse_id);


--
-- Name: vaccinationrecord vaccinationrecord_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationrecord
    ADD CONSTRAINT vaccinationrecord_patient_id_fkey FOREIGN KEY (patient_id) REFERENCES public.patient(patient_id);


--
-- Name: vaccinationrecord vaccinationrecord_time_slot_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationrecord
    ADD CONSTRAINT vaccinationrecord_time_slot_id_fkey FOREIGN KEY (time_slot_id) REFERENCES public.timeslot(time_slot_id);


--
-- Name: vaccinationrecord vaccinationrecord_vaccine_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationrecord
    ADD CONSTRAINT vaccinationrecord_vaccine_id_fkey FOREIGN KEY (vaccine_id) REFERENCES public.vaccine(vaccine_id);


--
-- Name: vaccinationschedule vaccinationschedule_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationschedule
    ADD CONSTRAINT vaccinationschedule_patient_id_fkey FOREIGN KEY (patient_id) REFERENCES public.patient(patient_id);


--
-- Name: vaccinationschedule vaccinationschedule_time_slot_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationschedule
    ADD CONSTRAINT vaccinationschedule_time_slot_id_fkey FOREIGN KEY (time_slot_id) REFERENCES public.timeslot(time_slot_id);


--
-- Name: vaccinationschedule vaccinationschedule_vaccine_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinationschedule
    ADD CONSTRAINT vaccinationschedule_vaccine_id_fkey FOREIGN KEY (vaccine_id) REFERENCES public.vaccine(vaccine_id);


--
-- Name: vaccinedelivery vaccinedelivery_vaccine_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.vaccinedelivery
    ADD CONSTRAINT vaccinedelivery_vaccine_id_fkey FOREIGN KEY (vaccine_id) REFERENCES public.vaccine(vaccine_id);


--
-- PostgreSQL database dump complete
--

