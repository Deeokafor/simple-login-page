'use strict'

window.onload = copyProcess;

function copyProcess(){
								let copyAction = document.getElementById('copy-button');
								let copyStatus = document.getElementById('copy-action-status');
								
								copyAction.addEventListener('click', copyFunction);
								
								function copyFunction(){
												setTimeout(copyStatus.innerHTML = 'copied', 2000);
												clearTimeout();
								}
								
				}
