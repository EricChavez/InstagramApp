var yo = require('yo-yo');
var landing = require('../landing');


var singupform = yo`<div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="Platzigram">Platzigram</h1>
                                    <form class="signup-form">
                                        <h2>Registrate para ver todo el contenido</h2>
                                        <div class="section">
                                            <a class="btn btn-fb hidden-on-small-only">Iniciar sesión con facebook</a>
                                            <a class="btn btn-fb hide-on-med-and-up"> <i class="fa fa-facebook"></i> Iniciar sesión con facebook</a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="email" name="email" placeholder="Correo electrónico">
                                            <input type="text" name="name" placeholder="Nombre completo">
                                            <input type="text" name="username" placeholder="Nombre de usuario">
                                            <input type="password" name="password" placeholder="Contraseña">
                                            <button class="btn waves-effect waves-light btn-signup" type="submit" >Registrate</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="signup-box">
                                    ¿Tienes una cuenta ? <a href="/signin">Entrar</a>
                                </div>

                            </div>
                        </div>`;

module.exports = landing(singupform);