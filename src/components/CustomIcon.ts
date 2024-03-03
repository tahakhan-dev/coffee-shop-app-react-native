// this will help to import the assets from our selection.json file and app icon file 
// these three lines are required to use the custom icons in the app

import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '../../selection.json';
export default createIconSetFromIcoMoon(icoMoonConfig);