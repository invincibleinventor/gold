
/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import { QrReader } from 'react-qr-reader';
export const QRReader = qwikify$(QrReader);
import BarCodeScanner from "react-qr-barcode-scanner";
export const BarCode = qwikify$(BarCodeScanner)
