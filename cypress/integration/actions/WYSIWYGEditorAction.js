import WYSIWYGEditorActionPage from '../pages/WYSIWYGEditorActionPage.js'


class WYSIWYGEditorAction {

    // func add Element
    static VerifyTitle() {
        WYSIWYGEditorActionPage.getTitle().should('have.text', 'An iFrame containing the TinyMCE WYSIWYG Editor')
    }

}

export default WYSIWYGEditorAction;