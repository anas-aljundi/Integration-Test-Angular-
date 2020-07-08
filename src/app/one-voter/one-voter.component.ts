import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-one-voter',
  templateUrl: './one-voter.component.html',
  styleUrls: ['./one-voter.component.css']
})
export class OneVoterComponent implements OnInit {

  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  upVote() {
    if (this.myVote === 1) {
        return;
    }

    this.myVote++;

    this.vote.emit({ myVote: this.myVote });
  }

  downVote() {
    if (this.myVote === -1) {
        return;
    }
    this.myVote--;

    this.vote.emit({ myVote: this.myVote });
  }

  get totalVotes() {
    return this.othersVote + this.myVote;
  }

}
