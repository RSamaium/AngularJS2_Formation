import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      const id = +params.id
    })
  }

  back() {
    this.router.navigate(['/'])
  }

}
