  $(document).ready(function(){
    const app = require('electron').remote.app;
    const { remote } = require('electron');
    const electron = require('electron');
    const  BrowserWindow = electron.remote.BrowserWindow;
    //$('.btn-group').hide();


    $('#minus').click(function(){
      remote.BrowserWindow.getFocusedWindow().minimize();
    });

    $('#plus').click(function(){
      if(remote.BrowserWindow.getFocusedWindow().isMaximized()){
        remote.BrowserWindow.getFocusedWindow().unmaximize();
      }
      else {
          remote.BrowserWindow.getFocusedWindow().maximize();
      }
    });

    $('#cancel').click(function(){
      remote.BrowserWindow.getFocusedWindow().close();
    })

    $('#mesa').click(function(){

                let win = new BrowserWindow({ width: 800, height: 1500 })
                win.loadURL('http://github.com')

                let contents = win.webContents
                console.log(contents);
      });

      $('#menu').click(function(){
        <a href="index_child.html"></a>
      });


  });
