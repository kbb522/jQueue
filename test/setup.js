import {JSDOM} from 'jsdom'

global.document = new JSDOM('<!doctype html><html><body></body></html>')
global.window = document.window
global.navigator = global.window.navigator
