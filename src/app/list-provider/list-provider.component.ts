import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {

  providers: any[] = [];
  constructor(private service: ProviderService) { }

  ngOnInit(): void {
    this.service.listproviders().subscribe(
      data=>{
                  console.log(data);
                  this.providers = data["hydra:member"];
      }
    );
  }

}
