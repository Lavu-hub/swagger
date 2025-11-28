const express=require('express');
const router=express.Router();
const st=require('../controller/student.js');
const ct=require('../controller/course.js');
const pt=require('../controller/teacher.js');
const rt=require('../controller/register.js');
const lt=require('../controller/login.js');

router.get("/testapi",(req,res)=>{
    res.send({
        status:"api called"
    })
})

router.get('/homepage', (req, res) => {

   
    const student = {
        id: 1,
        name: 'Akashdeep',
        age: 21,
        course: 'BCA'
    };

    res.render('home', { student });
});
router.get('/homepage', (req, res) => {

   
    res.render('home');
});

/**
 * @openapi
 * /getdatastudent:
 *   get:
 *     summary: Get list of all students
 *     description: Returns all students from the database. Requires a valid token.
 *     tags:
 *       - Students
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: "your-jwt-token"
 *     responses:
 *       200:
 *         description: List of all students
 *       401:
 *         description: Invalid or missing token
 *       500:
 *         description: Server error
 */
router.get('/getdatastudent',st.getStudentList)
/**
 * @openapi
 * /insertdatastudent:
 *   post:
 *     summary: Insert new student record
 *     description: Inserts a new student into the database. Requires a valid token.
 *     tags:
 *       - Students
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *               name:
 *                 type: string
 *                 example: "Manan"
 *               age:
 *                 type: number
 *                 example: 22
 *               class:
 *                 type: string
 *                 example: "12th"
 *     responses:
 *       200:
 *         description: Student inserted successfully
 *       400:
 *         description: Something went wrong
 *       401:
 *         description: Invalid token
 *       500:
 *         description: Server error
 */
router.post('/insertdatastudent', st.insertStudent);
/**
 * @openapi
 * /updatestudent:
 *   put:
 *     summary: Update student record
 *     description: Update a student record by name. Token required.
 *     tags:
 *       - Students
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         example: "John"
 *         description: Name of the student to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               token: "your-jwt-token"
 *               age: 23
 *               class: "BCA"
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       400:
 *         description: Request body missing or empty
 *       401:
 *         description: Invalid token
 *       404:
 *         description: No record found for the given name
 *       500:
 *         description: Server error
 */
router.put('/putdatastudent',st.updateStudent)
/**
 * @openapi
 * /deletestudent/{name}:
 *   delete:
 *     summary: Delete student by name
 *     description: Deletes a student record using name. Token required.
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         example: "John"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: "your-jwt-token"
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       400:
 *         description: Something went wrong
 *       401:
 *         description: Invalid token
 *       500:
 *         description: Server error
 */


router.delete('/deletedatastudent/:name',st.deleteStudent)

router.get('/getdatacourse',ct.getCourseList)
router.post('/insertdatacourse',ct.insertCourse)
router.put('/putdatacourse',ct.updateCourse)
router.delete('/deletedatacourse/:id',ct.deleteCourse)

router.get('/getdatateacher',pt.getteacher)
router.post('/insertdatateacher',pt.insertteacher)
router.put('/updatedatateacher',pt.updateteacher)
router.delete('/deletedatateacher/:name',pt.deleteteacher)

router.post('/registerstudentdata',rt.registerStudent)
router.post('/loginstudentdata',lt.loginStudent)


module.exports=router;