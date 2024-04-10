import WYSIWYGEditorActionPage from '../pages/WYSIWYGEditorActionPage.js'

const wYSIWYGEditorActionPage = new WYSIWYGEditorActionPage()

class WYSIWYGEditorAction {

    // func add Element
    VerifyTitle() {
        wYSIWYGEditorActionPage.getTitle().should('have.text', 'An iFrame containing the TinyMCE WYSIWYG Editor')
    }

}

export default WYSIWYGEditorAction;