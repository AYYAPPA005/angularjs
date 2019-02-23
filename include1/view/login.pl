<form>
	<table>
		<tr>
			<th colspan="2">LOGIN FORM</th>
		</tr>
		<tr>
			<td>USER ID</td>
			<td><input type="text" ng-model='user.uid'/></td>
		</tr>
		<tr>
			<td>PASSWORD</td></td>
			<td><input type="text" ng-model='user.pwd'/></td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<button ng-click='submit()'>
					SUBMIT
				</button>
			</td>
		</tr>
	</table>
</form>
