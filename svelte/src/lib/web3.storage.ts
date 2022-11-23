import {Web3Storage} from 'web3.storage';
import type {CIDString} from 'web3.storage/dist/src/lib/interface';
import {File} from 'web3.storage';
import { Buffer } from 'buffer';

const web3StorageToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZBNzQyNjUyQjE5YkYxOTE3QTMyRjU3MTQ5OTZERkZiZTYyQTU5NjYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njg4ODQwNDUyODMsIm5hbWUiOiI3MGh3b2NoZSJ9.0X9aY1RsQ_38VYCxgs1rhyKxU6-HmDk3TeC7PTeH_xg";

function makeStorageClient() {
    return new Web3Storage({token: web3StorageToken});
}

export async function storeFiles(files: File[]): Promise<CIDString> {
    const client = makeStorageClient();
    const cid = await client.put(files, {wrapWithDirectory: false});
    console.log('stored files with cid:', cid);
    return cid;
}

export function makeFileObjects(obj) {
    const buffer = Buffer.from(JSON.stringify(obj));
    return [new File([buffer], 'metadata.json')];
}
