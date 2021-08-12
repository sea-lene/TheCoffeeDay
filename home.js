var app=angular.module("myApp",[]);

app.controller("myCtrl",function($scope){
	
	$scope.pat_date=/^\d{2}\/\d{2}\/\d{2}$/;
	
	$scope.pat_time=/^\d{2}:\d{2}[aAPp][mM]$/;
	
	$scope.pat_phone=/^[1-9]{1,10}$/;
	
	$scope.pat_people=/^[1-9]{1,2}$/;
	
	$scope.pat_name=/^[A-Za-z]{1,}$/;
	
	$scope.check=function(){
		
		if($scope.myForm.name.$error.required)
		{
			$scope.bool_name=true;
		}
		else
		{
			$scope.bool_name=false;
		}
	}
	
	$scope.check2=function(){
		if($scope.myForm.phonenumber.$error.required)
		{
			$scope.bool_phone=true;
		}
		else
		{
			$scope.bool_phone=false;
		}
	}
	
	$scope.check3=function(){
		
		if($scope.myForm.email.$error.required)
		{
			$scope.bool_email=true;
			
		}
		else
		{
			$scope.bool_email=false;
		}
	}
	
	$scope.check4=function(){
		
		$scope.d=new Date($scope.date);
		//alert($scope.d);
		
		if($scope.myForm.date.$error.required)
		{
			$scope.bool_date=true;
			$scope.msg_date="Date is required";
		
		}
		else if($scope.d=="Invalid Date")
		{
			
			$scope.bool_date=true;
			$scope.msg_date="Invalid Date";
			
		}
		else
		{
			$scope.bool_date=false;
			$scope.msg_date=" ";
		}
		
		
	}
	
	$scope.check5=function(){
	//	$scope.d=new Date();
	//	$scope.d.setTime($scope.time);
	//		
		
	//	alert($scope.d);
		
		if($scope.myForm.time.$error.required)
		{
			$scope.bool_time=true;
			$scope.msg_time="Time is required";
		
		}
		//else if($scope.t=="Invalid Date")
		//{
			
			
		//	$scope.bool_time=true;
		//	$scope.msg_time="Invalid Time";
			
		//}
		else
		{
			$scope.bool_time=false;
		}
	}
	
	$scope.check6=function(){
		
		if($scope.myForm.people.$error.required)
		{
			$scope.bool_people=true;
			
		}
		else
		{
			$scope.bool_people=false;
		}
	}
	
	
});