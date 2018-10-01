import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  
  form = new FormGroup(
		{
			email: new FormControl('', [Validators.email, Validators.required]),
			password: new FormControl('', Validators.required)
		},
		{ updateOn: 'submit' }
	);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
		this.submitted = true;
    if (this.form.invalid) {
			return;
		}
		this.doSubmit();
  }
  

  protected doSubmit() {
		const { email, password, rememberMe } = this.form.value;
		this.router.navigateByUrl('/studentSearch');
	}

}
