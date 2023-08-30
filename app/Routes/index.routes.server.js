import {displayHomePage, displayAboutPage, displayContactPage, displayDownloadPage} from '../Controllers/index.controllers.server.js'
import { Router } from "express";


const router = Router(); // I am initializing the router function.

// app.use('/')
router.get('/', displayHomePage);
router.get('/contactus', displayContactPage);
router.get('/about', displayAboutPage);
router.get('/download', displayDownloadPage);



export default router;