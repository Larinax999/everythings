if(window.location.href=="https://www.virtualschool.club/student/exam.php"){var examtype=$("#examtype").val();var rangid=$("#rang").val();var termid=$("#term").val();var levelid=$("#level").val();var subjid=$("#subj").val();var subsubjid=$("#subsubj").val();var stdid=$("#stdcode").val();var schid=$("#schcode").val();var learntypeid=$("#learntype").val();var maxyear=$("#maxyear").val();var idlearn=$("#idlearn").val();var exammax=$("#exammax").val();for(var s=0;s<exammax;s++){var Listans=["ก","ข","ค","ง"]var ansraned=Listans[Math.floor(Math.random()*Listans.length)];var payload=`year=2563&term=${termid}&level=${levelid}&subj=${subjid}&subsubj=${subsubjid}&quesid=${s+1}&schcode=${schid}&user=${stdid}&ans=${ansraned}&datetimein=1970/01/01 00:00:01&datein=1970/01/01&timein=00:00:01`var result_ran=$.ajax({type:'POST',url:'https://www.virtualschool.club/student/exam_save_'+examtype+'.php',headers:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'},data:payload})console.log(result_ran.text)}alert("Done")}else{alert("ERROR 404")}
