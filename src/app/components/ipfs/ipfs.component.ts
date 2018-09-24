import { Component, OnInit } from '@angular/core';
import { IpfsService } from '../../services/ipfs.service';
import { EthService } from '../../services/eth.service';

import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'app-ipfs',
  templateUrl: './ipfs.component.html',
  styleUrls: ['./ipfs.component.css']
})


export class IpfsComponent implements OnInit {
  _fileToUpload: File;
  _fileHashCode: any;
  _txnCode: any;
  _imgSrc: string;
  _txnInputData: any; 

  constructor(
    private _ipfsService: IpfsService,
    public ngProgress: NgProgress,
    private _ethContractService: EthService
  ) { }

  ngOnInit() {
  }

  public onFileSelected(event) {    
    this._fileToUpload = event.target.files[0];
    console.log(this._fileHashCode);    
  }

  public upload() {
    this.ngProgress.start();
     this._ipfsService.uploadFileToIPFS(this._fileToUpload)
     .then(result => this._fileHashCode = result); 
     this.ngProgress.done(); 
  }

  public storeIpfsCode(ipfsHashCode: string){
    console.log('ipfs', ipfsHashCode);
    this._ethContractService.storeIpfsCode(ipfsHashCode)
    .then(result => this._txnCode = result);    
  }

  public getTransactionInputData(txnCode: string){
    this._ethContractService.getTransactionInputData(txnCode)
    .then(result => this._txnInputData = result);
  }

  public downloadfile(_txnInputData: string){
    console.log('Image data', _txnInputData);
    this._imgSrc="https://ipfs.io/ipfs/"+_txnInputData;
    
  }

}
