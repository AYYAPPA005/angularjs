<div id="section">
	 <u>DEFAULT TEMPLATE service.pl IN MULTIPLE VIEWS</u>
	 <br/><br/>
	<div ng-include="'views/service1.pl'"></div>
	<br/><br/>
	<div ui-view="service2"></div>
	<br/><br/>
	<div ui-view="service3"></div>
</div>