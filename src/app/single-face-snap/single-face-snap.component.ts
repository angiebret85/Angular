import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService : FaceSnapService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.buttonText = "Oh Snap !";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onAddSnap(): void {
    if (this.buttonText === "Oh Snap !"){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Snapped !!"
    }
    else{
      this.buttonText = "Oh Snap !";
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    }
    
  }

}
