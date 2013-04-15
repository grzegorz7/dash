Ext.data.JsonP.command({"title":"Introduction to Sencha Cmd","guide":"<h1>Introduction to Sencha Cmd</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/command-section-1'>Compatibility</a></li>\n<li><a href='#!/guide/command-section-2'>System Setup</a></li>\n<li><a href='#!/guide/command-section-3'>Command Basics</a></li>\n<li><a href='#!/guide/command-section-4'>Current Directory</a></li>\n<li><a href='#!/guide/command-section-5'>Developing Applications</a></li>\n<li><a href='#!/guide/command-section-6'>Beyond The Basics</a></li>\n<li><a href='#!/guide/command-section-7'>Troubleshooting</a></li>\n</ol>\n</div>\n\n<p>Sencha Cmd is a cross-platform command line tool that provides many automated tasks\naround the full life-cycle of your applications, from generating a new project to\ndeploying an application to production.</p>\n\n<p><p><img src=\"guides/command/sencha-command-128.png\" alt=\"\"></p></p>\n\n<p>Sencha Cmd provides a collection of powerful, time-saving features that are designed to\nwork together and in conjunction with the Sencha Ext JS and Sencha Touch frameworks.\nSencha Cmd provides the following capabilities:</p>\n\n<ul>\n<li>Code generation tools to generate entire applications and extend those applications\nwith new MVC components.</li>\n<li>A framework-aware, JavaScript compiler that knows the semantics of Sencha frameworks\nand can produce minimal footprint builds from your source. In the future, the compiler\nwill optimize many of the high-level semantics provided by Sencha frameworks to reduce\nload time of your applications.</li>\n<li>Native packaging to convert your Sencha Touch application into a first-class, mobile\napplication that has access to device functionality and can be distributed in App Stores.</li>\n<li>Powerful code selection tools for tuning what is included in your application's final\nbuild, determine common code across pages and partition shared code into \"packages\" - all\nusing high-level set operations to get builds exactly as you want them.</li>\n<li>Workspace management to assist in sharing code between pages or applications.</li>\n<li>Image extraction to convert CSS3 features (such as border-radius and linear-gradient)\ninto sprites for legacy browsers.</li>\n<li>Flexible configuration system that enables defaults to be specified for command options\nat the application or workspace level or across all workspaces on a machine.</li>\n<li>Robust logging to help you understand the inner workings of commands and facilitate\ntroubleshooting.</li>\n<li>Integration with Apache Ant.</li>\n<li>Code generation hooks that can be specific to one page or shared by all pages in the\nworkspace, for example, to check coding conventions or guidelines as new models are\ngenerated).</li>\n</ul>\n\n\n<h2 id='command-section-1'>Compatibility</h2>\n\n<p>Sencha Cmd is designed for Sencha Ext JS version 4.1.1a or higher and Sencha Touch\nversion 2.1 or higher. Many of the new features of Sencha Cmd require framework support\nthat is only available at these version levels. There are some low-level commands that\ncan be used for older versions of Sencha frameworks or JavaScript in general.</p>\n\n<p>If you are using an older version of Ext JS, you may use Sencha Cmd's <code>build</code> command to\nbuild via your JSB file. In other words, Sencha Cmd can replace JSBuilder to produce a\ncompressed build of the files described in a JSB file. Sencha Cmd will not update your JSB\nfile as was done by the previous SDK Tools v2. If your build process requires this support,\nthen you should wait to upgrade to Sencha Cmd.</p>\n\n<p>Sencha Touch 2.0.x requires <a href=\"http://www.sencha.com/products/sdk-tools\">SDK Tools v2</a>.</p>\n\n<h2 id='command-section-2'>System Setup</h2>\n\n<p>Follow these steps to set up your system and start using Sencha Cmd:</p>\n\n<ol>\n<li>Download and install a\n<a href=\"http://www.oracle.com/technetwork/java/javase/downloads/index.html\">Java Run-time Environment or JRE</a>.\nIt is best to download the most up-to-date version available. The JRE version must be at\nleast JRE 6.</li>\n<li>Download and install <a href=\"http://compass-style.org/\">Compass</a>. Compass may have its own\nsystem requirements. Compass is required for several features of Sencha Cmd.</li>\n<li>Download and install <a href=\"http://www.sencha.com/products/sencha-cmd\">Sencha Cmd</a>.</li>\n<li>Download the appropriate version of the <a href=\"http://www.sencha.com/products/extjs/\">Ext JS SDK</a>\nor <a href=\"http://www.sencha.com/products/touch/\">Sencha Touch SDK</a>.</li>\n<li>Extract the SDK to a local directory.</li>\n</ol>\n\n\n<p>Next, you need to verify that Sencha Cmd is working properly on your machine. Open a\ncommand line terminal, and run the following commands. Replace <code>/path/to/sdk</code> with the\nactual path to the SDK that you extracted to previously (<strong>not the Sencha Cmd directory</strong>).</p>\n\n<pre><code>cd /path/to/sdk\nsencha\n</code></pre>\n\n<p>You should see output that starts like this:</p>\n\n<pre><code>Sencha Cmd v3.0.0\n...\n</code></pre>\n\n<p>If the above message appears and the version number is 3.0.0 or higher you are all set.</p>\n\n<h2 id='command-section-3'>Command Basics</h2>\n\n<p>All of the features provided by Sencha Cmd are arranged in categories (or modules) and\ncommands.</p>\n\n<pre><code>sencha [category] [command] [options...] [arguments...]\n</code></pre>\n\n<p>Help is available using the <code>help</code> command.</p>\n\n<pre><code>sencha help [module] [action]\n</code></pre>\n\n<p>For example, try this:</p>\n\n<pre><code>sencha help\n</code></pre>\n\n<p>And you should see this:</p>\n\n<pre><code>Sencha Cmd v3.0.0\n\nOPTIONS\n  * --debug, -d - Sets log level to higher verbosity\n  * --plain, -p - enables plain logging output (no highlighting)\n  * --quiet, -q - Sets log level to warnings and errors only\n  * --sdk-path, -s - sets the path to the target sdk\n\nCATEGORIES\n  * compile - Compile sources to produce concatenated output and metadata\n  * generate - Generate code like models and controllers or raw templates\n  * theme - Builds a set of theme images from a given html page\n  * app - Perform various application build processes\n\nCOMMANDS\n  * ant - Invoke Ant with helpful properties back to Sencha Cmd\n  * build - Builds a project from a JSB3 file.\n  * config - Loads a config file or sets a configuration property\n  * help - Get help on using Sencha Cmd\n</code></pre>\n\n<h2 id='command-section-4'>Current Directory</h2>\n\n<p>In many cases, Sencha Cmd requires you to set a specific current directory. Or it may\njust need to know details about the relevant SDK. This can be determined when Sencha Cmd\nis run from a generated application folder or, for some few commands, from an extracted\nSDK folder.</p>\n\n<p><em>Important.</em> For the following commands, Sencha Cmd needs to be run from the root folder\nof a generated application. They will fail if not run from such a folder.</p>\n\n<pre><code>* `sencha generate ...` (all commands other than `app` and `workspace`)\n* `sencha app ...`\n</code></pre>\n\n<p>To generate an application you can run the following command from an extracted SDK folder:</p>\n\n<pre><code>cd /path/to/SDK\nsencha generate app ...\n</code></pre>\n\n<p>Or you can use the <code>-sdk</code> switch like so:</p>\n\n<pre><code>sencha -sdk /path/to/sdk generate app ...\n</code></pre>\n\n<p>When using the compiler, Sencha Cmd detects the framework in use when run from an\napplication folder. If you are not running from a generated application, you may need to\nuse the <code>-sdk</code> switch:</p>\n\n<pre><code>sencha -sdk /path/to/sdk compile ...\n</code></pre>\n\n<h2 id='command-section-5'>Developing Applications</h2>\n\n<p>The starting point for most projects is to generate an application skeleton. This is done\nusing the following:</p>\n\n<pre><code>sencha -sdk /path/to/sdk generate app MyApp /path/to/MyApp\n</code></pre>\n\n<p>Ext JS and Sencha Touch applications are structured differently from each other. Further,\nparticularly with Ext JS, applications can be quite large and may contain multiple pages.</p>\n\n<p>To get started building applications using Sencha Cmd, consult the\n<a href=\"#/guide/command_app\">Using Sencha Cmd</a> guide.</p>\n\n<h2 id='command-section-6'>Beyond The Basics</h2>\n\n<p>There are many other details related to using Sencha Cmd that can be helpful. The <code>help</code>\ncommand is a great reference, but if you want to walk through all the highlights, consult\n<a href=\"#/guide/command_advanced\">Advanced Sencha Cmd</a>.</p>\n\n<h2 id='command-section-7'>Troubleshooting</h2>\n\n<p>Here are some tips for solving common problems encountered when using Sencha Cmd.</p>\n\n<h3>Command Not Found</h3>\n\n<p>If running <code>sencha</code> results in the error message <code>sencha: command not found</code> on OSX/Linux\nor <code>'sencha' is not recognized as an internal or external command, operable program or\nbatch file</code> on Windows, follow these steps:</p>\n\n<ul>\n<li>Close all existing terminal/command prompt windows and reopen them.</li>\n<li>Make sure that Sencha Cmd is properly installed:\n\n<ul>\n<li>The installation directory exists. By default, the installation path is:\n\n<ul>\n<li>Windows: <code>C:\\Users\\Me\\bin\\Sencha\\Cmd\\{version}</code></li>\n<li>Mac OS X: <code>~/bin/Sencha/Cmd/{version}</code></li>\n<li>Linux: <code>~/bin/Sencha/Cmd/{version}</code></li>\n</ul>\n</li>\n<li>The path to Sencha Cmd directory is prepended to your PATH environment variable.\nFrom the terminal, run <code>echo %PATH%</code> on Windows or <code>echo $PATH</code> on Mac or Linux.\nThe Sencha Cmd directory should be displayed in part of the output. If this is not\nthe case, add it to your PATH manually.</li>\n<li>The environment variable <code>SENCHA_CMD_{version}</code> is set, with the value being\nthe absolute path to the installation directory mentioned above. For example, if the\ninstalled version is 3.0.0, a <code>SENCHA_CMD_3_0_0</code> must be set. If the output is\nempty, set the environment variable manually. To check, go to the command prompt (or\nTerminal) and run:\n\n<ul>\n<li>Windows: <code>echo %SENCHA_CMD_3_0_0%</code></li>\n<li>Other - <code>echo $SENCHA_CMD_3_0_0</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n\n\n<h3>Compass is not a recognized command</h3>\n\n<p>If you see an error related to not recognizing or finding <code>\"compass\"</code> this is likely because\nCompass is not installed or is not in your PATH. See the System Requirements above.</p>\n\n<h3>Wrong Current Directory</h3>\n\n<p>A common mistake is to perform a command that requires the current directory to be either\nan extracted SDK directory or an application directory, but such a directory has not been\nset. If this requirement is not met, Sencha Cmd displays an error and exits.</p>\n\n<p>Note that a valid application directory is one that was generated by Sencha Cmd.</p>\n\n<h3>Errors While Resolving Dependencies</h3>\n\n<p>The <code>sencha app build</code> command works by reading your <code>index.html</code> and scanning for\nrequired classes. If your application does not properly declare the classes it requires,\nthe build usually completes but will not contain all the classes needed by your application.</p>\n\n<p>To ensure that you have all required classes specified, always develop with the debugger\nconsole enabled (\"Developer Tools\" in IE/Chrome, FireBug in FireFox and Web Inspector in\nSafari) and resolve all warnings and error messages as they appear.</p>\n\n<p>Whenever you see a warning like this:</p>\n\n<pre><code>[<a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a>] Synchronously loading 'Ext.foo.Bar'; consider adding 'Ext.foo.Bar' explicitly as a require of the corresponding class\n</code></pre>\n\n<p>Immediately add 'Ext.foo.Bar' inside the <code>requires</code> array property of the class from\nwhich the dependency originates. If it is a application-wide dependency, add it to the\n<code>requires</code> array property inside <code><a href=\"#!/api/Ext-method-application\" rel=\"Ext-method-application\" class=\"docClass\">Ext.application</a>(...)</code> statement.</p>\n"});