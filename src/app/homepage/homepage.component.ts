import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  features = [
    {
      "title": "SPCI",
      "description": "This helps us to get the Search Price Competitive Index of a particular ASIN",
      "image": "assets/humanstanding1.png",
      "link": ""
    },
    {
      "title": "CMT Monitoring",
      "description": "This is used to monitor the ASINs and find out if they are competivive or not",
      "image": "assets/humanstanding2.png",
      "link": ""
    },
    {
      "title": "AUDI & WIMAN",
      "description": "This searches for a particular ASIN and then automatically identifies any pricing defects",
      "image": "assets/humanstanding3.png",
      "link": ""
    },
    {
      "title": "ABmark",
      "description": "This is an Automated Benchmarking System that helps us with benchmarking",
      "image": "assets/humanstanding4.png",
      "link": ""
    },
    {
      "title": "Glyph",
      "description": "This is an Automated Benchmarking System that helps us with benchmarking",
      "image": "assets/humanstanding4.png",
      "link": ""
    },
    {
      "title": "CMT OPs",
      "description": "This is an Automated Benchmarking System that helps us with benchmarking",
      "image": "assets/humanstanding4.png",
      "link": ""
    },
    {
      "title": "Mapping",
      "description": "This is an Automated Benchmarking System that helps us with benchmarking",
      "image": "assets/humanstanding4.png",
      "link": ""
    },
    {
      "title": "Crawling",
      "description": "This is an Automated Benchmarking System that helps us with benchmarking",
      "image": "assets/humanstanding4.png",
      "link": ""
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
