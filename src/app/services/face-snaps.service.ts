import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService {
    faceSnaps: FaceSnap[] =[
        {
            id: 1,
            title : "Archibald",
            description : "Mon meilleur ami depuis tout petit !",
            imageUrl : "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
            createdDate : new Date(),
            snaps : 170,
            location : "Givrand"
            },
            { 
              id: 2,
              title : "Mouton",
              description : "Mon autre meilleur ami !",
              imageUrl : "https://cdn.pixabay.com/photo/2017/01/16/19/54/ireland-1985088_960_720.jpg",
              createdDate : new Date(),
              snaps : 150
            },
            {
              id: 3,  
              title : "Chien",
              description : "Mon meilleur pote",
              imageUrl : "https://cdn.pixabay.com/photo/2015/11/25/15/31/dog-1062335_960_720.jpg",
              createdDate : new Date(),
              snaps : 0
            }
    ];
    

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  } 

  getFaceSnapById(faceSnapId:number) : FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}

