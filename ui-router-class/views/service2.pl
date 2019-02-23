<form>
	<table>
		<tr>
			<th colspan="2">{{message}}</th>
		</tr>
		<tr>
			<td>USER ID</td>
			<td><input type="text" ng-model="user.id"/></td>
		</tr>
		<tr>
			<td>PASSWORD</td></td>
			<td><input type="password" ng-model="user.pwd"/></td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<button ng-click="submit()">
					SUBMIT
				</button>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="reset" value="RESET"/>
			</td>
		</tr>
	</table>
</form>
<div ng-bind="data"></div>