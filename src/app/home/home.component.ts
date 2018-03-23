import { Component, OnInit } from "@angular/core";
import { DataService } from "../_services/index";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {


  constructor(private dataServices: DataService) {}

  ngOnInit() {
    this.dataServices.getAll().subscribe(
      data => {
        console.log("success");
        console.log(data);
      },
      error => {
        console.log("error");
        console.log(error);
      });
  }
}
