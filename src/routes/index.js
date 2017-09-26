const express = require('express');
const router = express.Router();

const model = require('../model/task')();

router.get('/',(req,res) => {

	model.find({},(err,tasks)=>{

		if(err) throw err;
		res.render('index',{
		title:'CRUD',
		tasks:tasks
	});

	});	
});
	
	router.post('/add',(req,res)=>{

		var body = req.body;
		body.status = false;

		model.create(body,(err,tasks)=>{
			
			if (err) throw err;
			res.redirect("/");

		});


		console.log(body);
	});


module.exports=router;