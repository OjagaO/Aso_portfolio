import React from 'react'
import BlackSlide from '../utils/blackSlide';
import Header from './Header';

const ContactPage = () => {
    return (
        <div id='c_body' className='box'>
            <Header />
            <BlackSlide></BlackSlide>
            <main>
                <div className="main-box">
                    <div className="ct-inner">
                        <div className="header-title">
                            <h1>Contact..</h1>
                            <p>お問い合わせ</p>
                        </div>
                        <div className="ct-form">
                            <form className="ct-form-main" action="https://ssl.form-mailer.jp/fm/service/Forms/confirm"
                                method="post" name="form1" target="_blank" ENCTYPE="multipart/form-data"
                                accept-charset="UTF-8">
                                <input type="hidden" name="key" value="74a58fb8760479"></input>

                                <div className="ct-title">
                                    <p className="ct-upper">都合により返信が遅れる場合がございます</p>
                                    <p><span>*</span>は必須項目です<br></br></p>
                                </div>
                                <div className="ct-radio ct-form-item">
                                    <dl>
                                        <dt>
                                            <span>*</span>お問い合わせ内容
                                        </dt>
                                        <dd>
                                            <label for="contact1"><input id="contact1" name="field_6594516" type="radio"
                                                    value="0"></input>お仕事の依頼</label>
                                            <label for="contact2"><input id="contact2" name="field_6594516" type="radio"
                                                    value="1"></input>お見積り</label>
                                            <label for="contact3"><input id="contact3" name="field_6594516" type="radio"
                                                    value="2"></input>ご相談</label>
                                            <label for="contact4"><input id="contact4" name="field_6594516" type="radio"
                                                    value="3"></input>雑談</label>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="name-form ct-form-item">
                                    <dl>
                                        <dt>
                                            <span>*</span>名前
                                        </dt>
                                        <dd>
                                            <input name="field_6594507_sei" type="text" placeholder="姓"></input>
                                            <input name="field_6594507_mei" type="text" placeholder="名"></input>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="mail-form ct-form-item">
                                    <dl>
                                        <dt>
                                            <span>*</span>メールアドレス
                                        </dt>
                                        <dd className="mail-form-dd">
                                            <input name="field_6594508" type="text" size="30"
                                                placeholder="info@example.com"></input>
                                            <br></br>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="number-form ct-form-item">
                                    <dl>
                                        <dt>
                                            連絡先
                                        </dt>
                                        <dd>
                                            <input name="field_6594512_1" type="text" maxlength="4" placeholder="090"></input> -
                                            <input name="field_6594512_2" type="text" maxlength="4" placeholder="0000"></input>
                                            -
                                            <input name="field_6594512_3" type="text" maxlength="4" placeholder="0000"></input>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="textarea-form ct-form-item">
                                    <dl>
                                        <dt>
                                            お問い合わせ詳細
                                        </dt>
                                        <dd>
                                            <textarea name="field_6594531" cols="60" rows="5"
                                                placeholder="例）こんなページを作りたいがいくらか,サイトの規模感のご相談等"></textarea>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="button-box">
                                    <p>
                                        <input className="submit-button" name="submit" type="submit" value="確認画面へ"></input>
                                    </p>

                                    <p>
                                        <a href="https://www.form-mailer.jp/?utm_source=https://ssl.form-mailer.jp/fms/74a58fb8760479&utm_medium=ownedmedia&utm_campaign=powered-by-formmailer"
                                            target="_blank" id="powered"></a>
                                    </p>

                                    <input type="hidden" name="code" value="utf8"></input>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ContactPage;